---
title: "Image Path Location on Hugo"
date: 2024-10-14T20:52:41+07:00
draft: false
---

If you are new to [Hugo](https://gohugo.io/) you will probably face a problem of how to put your image assets. I also faced this problem where I need to put image in my posts. Typically hugo folder structure are like this.

```
Main Folder/
    content/
    static/
    public/
    ...
```

You will need to pay attention to the three most important folders above. **Content** folder, like its name is where you put your posts, you can choose which document format to use, mine using Markdown because I've familiar with it. **Public** is where the static generated files located when you execute the **hugo** commandline. **Static** is where you can put you static assets such as image.

```
Main Folder/
    content/
    static/
        image1.png
        image2.jpeg
    public/
```

How you can link you image into your Markdown files is by using this markdown format

```python
# for first image
[First Image](image1.png)

# for second image
[First Image](image2.jpeg)
```

The benefits of using this solution is its simplicity, you could put all your images into one place and access it by it's name, but the drawback is as your assets grows, it'll become difficult to name your image files. So came the second way.

1. Create your post using this command

```
hugo new posts/title-of-your-post/index.md
```

2. Put your image assets inside this folder adjacent into index.md

```
Main Folder/
    content/
        posts/
            title-of-your-post/
                index.md
                image1.png
                image2.jpeg
    static/
        image1.png
        image2.jpeg
    public/

```

To access these images you'll be using this format

```python
# To access first image
[First Image][/title-of-your-post/image1.png]
# To access first image
[Second Image][/title-of-your-post/image2.jpeg]
```

This manner will make your blog directories more clean and neat compared to the previous technique. Hope this post is useful and don't forget to check my [App](https://play.google.com/store/apps/details?id=com.aplikasihebat.baca_app&pcampaignid=web_share) or you could access it in [here](https://aplikasihebat.com/belajar-baca/).
