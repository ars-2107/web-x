const hbs = `
<div class="container">
  <div class="row">
    <div class="col-12">
      <h3 class="name">{{title}}</h3>
      <div class="embed-responsive embed-responsive-16by9 mb-4" style="max-width: 600px; margin: 0 auto;">
        <iframe class="embed-responsive-item" src="{{videoUrl}}" allowfullscreen></iframe>
      </div>
      <p class="description">{{description}}</p>
    </div>
  </div>
</div>
`;

const block = {
  hbs,
  name: 'Featured Video',
  previewImageUrl: 'https://i.imgur.com/tjqJ5vB.png',
  category: 'Video',
  defaultData: {
    title: 'Featured Video',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.',
  },
  config: {
    title: {
      type: "string",
      name: 'Title',
    },
    videoUrl: {
      type: 'string',
      name: 'Video URL',
    },
    description: {
      type: "string",
      name: 'Description',
    },
  },
};

export default block;
