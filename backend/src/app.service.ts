import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { KafkaService } from './kafka/kafka.service';
import axios from 'axios';
import { thingspeakApiUrl, thingspeakApiChannelId } from '../config';

@Injectable()
export class AppService {
  constructor(private readonly kafkaService: KafkaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async onModuleInit() {
    // TODO: Uncomment this when you want to fetch data and produce to Kafka
    await this.fetchDataAndProduce();
  }

  // * INFO: The cron job will run every 1 minute on the 10th second
  // @Cron('10 * * * * *')
  async fetchDataAndProduce() {
    console.log('Fetching data and producing to Kafka 1111111');

    try {
      const channelId = thingspeakApiChannelId;
      const url = `${thingspeakApiUrl}/${channelId}/feeds.json`;

      console.log('url >> ', url);

      const response = await axios.get(url);
      const data = response.data;

      await this.kafkaService.produceMessage(data);
    } catch (error) {
      console.error('Error fetching or sending data:', error);
    }
  }
}
