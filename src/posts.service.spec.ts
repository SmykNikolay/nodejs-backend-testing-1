import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    const newPost: Omit<Post, 'id' | 'date'> = {
      text: 'New post',
    };
    const createdPost = postsService.create(newPost);
    expect(createdPost.text).toEqual(newPost.text);
    expect(postsService['posts']).toContain(createdPost);
  });

  it('should find a post', () => {
    const newPost: Omit<Post, 'id' | 'date'> = {
      text: 'New post',
    };
    const createdPost = postsService.create(newPost);
    const foundPost = postsService.find(createdPost.id);
    expect(foundPost).toEqual(createdPost);
  });
});