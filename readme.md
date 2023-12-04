# How to Reproduce the Issue

Follow these steps to reproduce the issue in the project.

## Step 1: Install the Packages

Before building the project, install the necessary packages:

```bash
yarn install
```

## Step 2: Build the Project

To build the project, run the following command:

```bash
yarn build
```

## Observations During Debugging

While debugging, the following points were noted:

- **Initial Build Behavior**: Running `yarn build` for the first time seems to produce the issue in question.
- **Subsequent Builds**: After the `.next` folder is generated, running the build command again does not yield the same result, although some warnings still persist.

## Demonstration

Below is a GIF demonstrating the execution of `yarn build` without a `.next` folder present:

![Gif of Build Process](https://media.cleanshot.cloud/media/26590/7Eiz1Ox0vwWQxzaakbsWJoFjp4FHpZbTMcWUZ1OP.gif?Expires=1701722471&Signature=WUlBHiZGJVJY8zm1EzCk9eW2YpgUcD~nm0Inl59AE~HrUk80xBSa5e02CvrbXf3a7ffN5ng0F-qAr95-vgKD~~HCsFpN1m1atj3Nj-S3z4xyvZIeVkOJWt4A8fOfjF1x6z1Nj6bGdZOywUKxJbJ6oqfYXMv3r1YgTcVpp3TGlUw3IY2ZzRUZscYGbC87iedKqvkSznlOrSgUky~ZJZ1M660oIKhzYmB4VGwPV8yNJQTgTVz4cHw2D~uprkWiq7fBTamEeaYeVliZO0H8avhxzow8EmutTiQI-uzvaczQ~vVef0Oc8GSwxekyo5jd3ahR1eZU-Y4kSdBiVtSV4Bib-g__&Key-Pair-Id=K269JMAT9ZF4GZ)
