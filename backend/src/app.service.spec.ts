import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { KafkaService } from './kafka/kafka.service';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { InternalServerErrorException } from '@nestjs/common';

describe('AppService', () => {
  let appService: AppService;
  let kafkaService: KafkaService;
  let axiosMock: MockAdapter;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: KafkaService,
          useValue: { produceMessage: jest.fn() },
        },
      ],
    }).compile();

    appService = module.get<AppService>(AppService);
    kafkaService = module.get<KafkaService>(KafkaService);
    axiosMock = new MockAdapter(axios);
  });

  afterEach(() => {
    axiosMock.reset();
  });

  it('should fetch data and produce a message to Kafka', async () => {
    const mockData = { feeds: [{ field1: 'value1' }] };
    axiosMock
      .onGet(
        `${process.env.THINGSPEAK_API_URL}/${process.env.THINGSPEAK_API_CHANNEL_ID}/feeds.json`,
      )
      .reply(200, mockData);

    await appService.fetchDataAndProduce();

    expect(kafkaService.produceMessage).toHaveBeenCalledWith(mockData);
  });

  it('should handle errors gracefully', async () => {
    axiosMock
      .onGet(
        `${process.env.THINGSPEAK_API_URL}/${process.env.THINGSPEAK_API_CHANNEL_ID}/feeds.json`,
      )
      .networkError();

    await expect(appService.fetchDataAndProduce()).rejects.toThrow(
      InternalServerErrorException,
    );
  });
});
