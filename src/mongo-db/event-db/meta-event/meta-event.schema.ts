import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import type { HydratedDocument } from 'mongoose';
import { MongoBaseSchema } from '@mongo-db/event-db/mongo-base.schema';

export type EventDocument = HydratedDocument<MetaEvent>;

@Schema({
  collection: 'meta_events',
})
export class MetaEvent extends MongoBaseSchema {
  @Prop({ required: true })
  shortDescription: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, name: 'event_id', type: mongoose.Schema.Types.UUID })
  eventId: string;
}

export const MetaEventSchema = SchemaFactory.createForClass(MetaEvent);
