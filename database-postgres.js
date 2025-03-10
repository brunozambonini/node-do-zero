import { randomUUID } from "node:crypto"
import { sql } from './db.js'

export class DatabasePostgres {
 
    async list(search){

        let videos
        
        if (search){
            videos = await sql`select * from videos where title ilike  "%${search}%"`
        } else{
            videos = await sql`select * from videos`
        }

        return videos
    }

    async create(video){

        await sql `insert into videos (title, description, duration) VALUES (${video.title}, ${video.description}, ${video.duration})`
    }

    async update(videoId, video){
        console.log(videoId)
        console.log(video)

        console.log('-------------------------------------------------')

        await sql`
                UPDATE videos
                SET title = ${video.title}, 
                    description = ${video.description}, 
                    duration = ${video.duration}
                WHERE id = ${videoId}
            `;
    }

    async delete(videoId){

        await sql `DELETE FROM videos WHERE id = ${videoId}`
    }
}