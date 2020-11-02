[ffmpeg]: https://ffmpeg.org/
[fs-module]: https://nodejs.org/api/fs.html#fs_file_system
[about]: #information_source-about
[node]: https://nodejs.org/en/
[node-git]: https://github.com/nodejs/node
[express]: https://github.com/expressjs/express
[multer]: https://github.com/expressjs/multer
[ffmpeg-git]: https://git.ffmpeg.org/gitweb/ffmpeg.git
[website]: https://video-cutter.herokuapp.com/
[this-page]: https://github.com/wejesuss/video-cutter


<h1 align="center">➤ Video Cutter</h1>

<p align="center">
  <img src="https://ik.imagekit.io/vhx2sevqtq/mstile-310x310_xLWm7GBNY.png" width="300" heigth="300">
</p>

<p align="center">
  <a href="LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>
</p>

___

<h3 align="center">
  <a href="#information_source-about">About</a>&nbsp;|&nbsp;
  <a href="#interrobang-reason">Reason</a>&nbsp;|&nbsp;
  <a href="#rocket-technologies-used">Technologies</a>&nbsp;|&nbsp;
  <a href="#school_satchel-how-to-use">How to Use</a>&nbsp;|&nbsp;
  <a href="#link-how-to-contribute">How to Contribute</a>&nbsp;|&nbsp;
  <a href="#license">License</a>
</h3>

___


## :information_source: About

An simple application to cut your videos using ffmpeg.

## :interrobang: Reason

The first goal for this project was to learn more about the video header and the header info, especially MPEG-4. Also, I wanted to learn how to cut videos using only the binary file information (buffers and chunks).

If you read the [About][about] you already know that I was not successful, my initial strategy:

1. Learn about headers (MPEG-4)
2. Read the file (using [fs module][fs-module])
3. Cut some chunks
4. Recreate the file header
5. Join all chunks

Unfortunately, the information about `.mp4` file headers is not public and free, and I didn't want to spend a lot of time on this project (there are others I want to do), so I choose to use [FFmpeg][ffmpeg] and leave the first idea (the pseudo-code above) for the future.

[FFmpeg][ffmpeg] would basically do what I wanted to do on my own.

## :seedling: Minimum Requirements

- [NodeJS v12][node]
- [NPM v6][node]
- [FFmpeg v4][ffmpeg]

## :rocket: Technologies Used

The project was developed using the following technologies

- [NodeJS][node-git]
- [Express][express]
- [Multer][multer]
- [FFmpeg][ffmpeg-git]

## :school_satchel: How to Use
You can download the project or directly use the [website][website]

To download and use the project:

- First, make sure you have [FFmpeg][ffmpeg] installed. - Second, make sure you have [Node][node] installed.

Then you can:

1. Clone this repository
    ```bash
    $ git clone https://github.com/wejesuss/video-cutter && cd video-cutter
    # You can also download the zip in this page
    ```

2. Install Dependecies and Run
    ```bash
    $ npm install
    # start the server (development)
    $ npm run dev 
    # or you can use (production)
    $ npm start
    ```

Your server should be running on `http://localhost:3333/`

3. Test and Enjoy

## :link: How to Contribute

1. Fork this repository

    1. Using github CLI
        ```bash
        # You can also use the second option
        $ gh repo fork wejesuss/video-cutter
        ```

    2. Using the website
        - You just need to click the 'Fork' button on the top of [this page][this-page]

2. Clone your fork
    ```bash
    $ git clone https://github.com/your-username/video-cutter && cd video-cutter
    # You can also download the zip in your repository page
    ```

3. Create a branch with your changes
    ```bash
    $ git checkout -b my-awesome-changes
    ```

4. Make the commit with your changes
    ```bash
    $ git commit -m 'fix: 42'
    ```

5. Push your branch
    ```bash
    # Send the code to your remote branch
    $ git push origin my-awesome-changes
    ```

6. Make a pull request

## License

This project is under the MIT license. See the [LICENSE](LICENSE) file.
