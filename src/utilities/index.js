export const handleInput = (fieldName, value, setProfile) => {
  setProfile((prev) => ({
    ...prev,
    [fieldName]: value,
  }));
};

export const handleArrayInputChange = (fieldName, value, setProfile) => {
  const updatedValues = value.split(",");
  handleInput(fieldName, updatedValues, setProfile);
};

export const handleInputInsideInputChange = (
  value,
  input1,
  input2,
  setProfile
) => {
  setProfile((prevProfile) => ({
    ...prevProfile,
    [input1]: {
      ...prevProfile.location,
      [input2]: value,
    },
  }));
};

export const dataURLtoFile = (dataURL) => {
  const arr = dataURL.split(",");
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], "image.png", { type: mime });
};

export const getCounsellorAmount = (amount) => {
  let counsellorAmount =
    (10000 * amount) / (10000 + 100 * 18 + 100 * 5 + 18 * 5);

  return counsellorAmount;
};
