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
4. Open the resulting STL files in [MeshLab](http://www.meshlab.net).
5. Apply the filters described in `mesh_processing/decimate_and_smooth.mlx`
   to each mesh. This reduces the number of vertices by a factor ~10
   (using Quadric Edge Collapse Decimation) and smooths the resulting mesh
   (using [Taubin's algorithm](https://graphics.stanford.edu/courses/cs468-01-fall/Papers/taubin-smoothing.pdf)).
6. Export the filtered meshes as binary STL files.
