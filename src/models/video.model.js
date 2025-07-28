import mongoose from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const VideoSchema = mongoose.Schema(
    {
        videoFile:{
            type: String,
            required: true,
        },
        thumbnail:{
            type: String,
            require: true,
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        title:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        duration:{
            type: Number,
            required: true,
        },
        views:{
            type: Number,
            required: true,
        },
        isPublished:{
            type: Boolean,
            required: true,
        },

    },
    {
        timestamps: true,
    }
)

VideoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",VideoSchema)