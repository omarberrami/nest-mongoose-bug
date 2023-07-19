import { Prop } from '@nestjs/mongoose';

export abstract class MongoBaseSchema {
  @Prop({ required: true, name: 'created_at' })
  createdAt: Date;

  @Prop({ required: false, name: 'updated_at' })
  updatedAt: Date;

  @Prop({ required: true, name: 'is_delated', default: false })
  isDeleted: boolean;

  @Prop({ required: false, name: 'deleted_at' })
  deletedAt: Date;
}
