import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'
import { prop, Ref } from '@typegoose/typegoose'
import { CommentModel } from '../comment/comment.model'

export interface VideoModel extends Base{}

export class VideoModel extends TimeStamps{
	@prop({unique: true})
	email: string

	@prop()
	name: string

	@prop()
	isPublic: string

	@prop({default: 0})
	views: number

	@prop({default: 0})
	like: number

	@prop({default: 0})
	disLike: number

	@prop()
	descriptions: string

	@prop()
	videoPath: string

	@prop()
	thumbnailPath: string

	// @prop({ref: () => CommentModel})
	// comments?: Ref<CommentModel>

}
