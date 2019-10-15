import { TextDataSource } from '@container/data-sources/text';

export class HelloWorld extends TextDataSource {
    getText() {
        return Promise.resolve('Hello World!');
    }
}
