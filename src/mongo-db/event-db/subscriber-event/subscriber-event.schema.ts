import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { HydratedDocument } from 'mongoose';
import { MongoBaseSchema } from '@mongo-db/event-db/mongo-base.schema';

export type SubscriberEventDocument = HydratedDocument<SubscriberEvent>;

@Schema({
  collection: 'subscribers_event',
})
export class SubscriberEvent extends MongoBaseSchema {
  @Prop({ required: true, name: 'first_name' })
  firstName: string;

  @Prop({ required: true, name: 'last_name' })
  lastName: string;
}

export const SubscriberEventSchema = SchemaFactory.createForClass(SubscriberEvent);
