export const ajouterUser = (ajUser) => {
  return { type: "ajouter", payload: ajUser };
};
export const modifierUser = (moUser) => {
  return { type: "modifier", payload: moUser };
};
export const supprimerUser = (idUser) => {
  return { type: "supprimer", payload: idUser };
};
