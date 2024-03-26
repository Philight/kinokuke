import glob, os, sys, argparse

"""
"  CONFIG
"""

IVIEW_PATH = r'C:\Users\Philight\Downloads\iview466_x64\i_view64.exe'
ROOT_DIR = os.getcwd()
IMAGES_DIR = os.getcwd() + r"\src\assets\images"

# CONVERT SETTINGS
CONVERT_SOURCE = IMAGES_DIR + r"\wall_types"
CONVERT_FORMATS = {
  'png': ['jpg', 'webp'],
  'jpg': ['webp'],
}

# RESIZE SETTINGS
RESIZE_SOURCE = IMAGES_DIR + r"\process"
RESIZE_FORMATS = ['jpg', 'webp']
# Start with largest image size
RESIZE_SIZES = {
  '2xl': 1920, 
  'xl': 1600, 
  'lg': 1366, 
  'md': 1024, 
  'sm': 768, 
  'xs': 640
}


"""
"  RESIZING IMAGES
"""
def batch_resize():

  # ITERATE SUBDIRECTORIES

  found_sizes = []
  for directory in glob.glob(RESIZE_SOURCE + r"/*/", recursive=True):
    dirname = os.path.dirname(directory)
    found_sizes.append(os.path.basename(dirname))

  # FIND DIRECTORY WITH LARGEST IMAGE SIZES (COPY SOURCE)

  resize_start_size = ''
  for image_size in list(RESIZE_SIZES):
    if image_size in found_sizes:
      resize_start_size = image_size
      break

  # TERMINATE IF NO SIZE FOLDERS FOUND
  if not resize_start_size: 
    return None

  # ITERATE RESIZE_SIZES

  resize_source_files = RESIZE_SOURCE + "\\" + resize_start_size + "\\*." + 'jpg'
  resize_start_index = list(RESIZE_SIZES).index(resize_start_size) + 1

  # TERMINATE IF SMALLEST SIZE (XS)
  if resize_start_index >= len(list(RESIZE_SIZES)) - 1: return None

  for target_size_key, target_size_value in RESIZE_SIZES.items():

    # SKIP SIZES
    if list(RESIZE_SIZES).index(target_size_key) < resize_start_index: continue

    for target_format in RESIZE_FORMATS:
      resize_target_files = RESIZE_SOURCE + "\\" + target_size_key + "\\*." + target_format
#      print(resize_target_files)

      command = r"%s %s"%(IVIEW_PATH, resize_source_files) + r" /resize=(%d,0) /aspectratio /resample /convert=%s"%(target_size_value, resize_target_files)
#      print(command)

      # EXECUTE BATCH
      os.system(command)

  print("batch_resize | Batch images resizing finished.")


"""
""  CONVERTING IMAGE FORMATS
"   Batch convert all images to TARGET_CONVERT_FORMATS
"""
def batch_convert():

  TEMP_LIST = 'temp_list.txt'

  # ITERATE CONVERT_FORMATS

  for source_format, target_formats in CONVERT_FORMATS.items():

    # SAVE FILE PATHS TO TEMP FILE

    with open(TEMP_LIST, 'w', encoding='utf-8') as f:
      for file in glob.glob(CONVERT_SOURCE + r"/**/*." + source_format, recursive=True):
#        print(file)
        f.write(file)
        f.write('\n')

    # BATCH CONVERT, KEEP SAME DIRECTORY/FILENAME

    for target_format in target_formats:
      command = r"%s /filelist=%s"%(IVIEW_PATH, TEMP_LIST) + r" /aspectratio /resample /convert=" + r"$D\*."+ target_format
      
      # EXECUTE BATCH
      os.system(command)

  # DELETE TEMP LIST
  os.remove(TEMP_LIST)

  print("batch_convert | Batch images converting finished.")



"""
""  MAIN
"""

if __name__ == "__main__":

  # PARSE SCRIPT ARGUMENTS

  parser = argparse.ArgumentParser(
      description="Script that adds 3 numbers from CMD"
  )
  parser.add_argument("--mode", required=True, type=str)
  args = parser.parse_args()

  # CALL BATCH FUNCTIONS

  if args.mode == 'convert':
    batch_convert()
  elif args.mode == 'resize':
    batch_resize()
  else:
    pass
