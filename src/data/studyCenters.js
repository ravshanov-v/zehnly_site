export const studyCenters = []

export function getStudyCenterById(id) {
  return studyCenters.find((center) => center.id === id) || null
}
