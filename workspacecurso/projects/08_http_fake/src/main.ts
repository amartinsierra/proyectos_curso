import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { PostComments } from './app/components/post-comments/post-comments';


bootstrapApplication(PostComments, appConfig).catch((err) => console.error(err));
