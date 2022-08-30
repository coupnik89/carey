export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        {
            name: 'caption',
            title: 'Caption',
            type: 'string'
        },
        {
            name: 'video',
            title: 'Video',
            type: 'file',
            options: {
                hotspot: true
            }
        }
    ]
}