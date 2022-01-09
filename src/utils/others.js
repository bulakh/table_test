export const getObjFromJson = (jsons) => {
  return jsons.map(json => JSON.parse(json));
}
