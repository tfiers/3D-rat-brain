# How the data was processed
(This report is written in the style of an instruction manual, for conciseness).

1. Download the data from
   [this _NITRC_ repository](https://www.nitrc.org/projects/whs-sd-atlas).
2. In the segmentation software _[ITK-SNAP](http://www.itksnap.org)_,
   open the file `WHS_SD_rat_atlas_v2.nii.gz` both as the "Main Image" and
   as a "Segmentation".
3. Generate a bunch of mesh files using `Segmentation > Export as surface mesh`,
   creating a separate `.STL` file for each label. In the `Mesh file name` field,
   enter `label_.stl`.
