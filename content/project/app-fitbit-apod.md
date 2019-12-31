---
title: Fitbit APOD
path: /project/fitbit-apod
featuredImage: ../media/east-lancs-past-captains/Combined.png
date: 2019-12-01T19:38:53.520Z
category: apps
description: Extending NASA's Astronomy Picture of the Day to use with Fitbit.
---

The National Aeronautics and Space Administration has a collection of the best astronomy pictures that are available on the [Astronomy Picture of the Day website](https://apod.nasa.gov/apod/astropix.html). There is no way of someone viewing these images with ease, the FItbit APOD updates the background daily to display the Astronmy Picture of the Day automatically.

## Results

TODO: Set up images and display image gallery

## Problem

The problem was integrating NASA's APOD REST API to the FItbit SDK, which came with some challenges:

1. Manipulating and optimizing the APOD images and storing the results available to be used.
2. Updating the APOD picture once a day to the new picture. 

### Major Challenge

The major challenge faced was the manipultion of the images. Fitbit's SDK allows only a few strict API functions to be used which meant that all image manipulation had to be done before it got to the FItbit SDK. The solution to this was to have a serverless API that will call NASA's API once per day to get the APOD. With the image, a number of modifications take place to cater for all smart watch sizes that are available.

This includes, changing the image aspect ratio and resolution, to be optimised for the smart wastch sizes and dynamically find the focal point depending to ensure the image fits perfectly for any aspect ratio.

This proved to be a challenge as there is no set aspect ratio for the APOD, not only finding the focal point dynamically but also deciding whether the image needs to be zoomed out and a dynamically coloured background needs to fill in the exposed edges.

The successful outcome of this is every image is displayed perfectly, tested on over 50 separate APOD images.

## Solution



## Process

## Conclusion