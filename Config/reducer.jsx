const initialState = {
  user: [
    {
      id: 1,
      nom: "idrissi",
      prenom: "mehdi",
      tele: "0643411819"
    },
    {
      id: 2,
      nom: "lakouass",
      prenom: "reda",
      tele: "0772321613"
    }
  ]
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ajouter":
      console.log({
        ...state,
        user: [...state.user, action.payload]
      });
      return { ...state, user: [...state.user, action.payload] };
    case "modifier":
      const us = state.user.find(
        (u) => u.id === parseInt(action.payload.id, 10)
      );
      if (us) {
        us.nom = action.payload.nom;
        us.prenom = action.payload.prenom;
        us.tele = action.payload.tele;
      }
      return state;
    case "supprimer":
      return {
        ...state,
        user: [
          ...state.user.filter((u) => u.id !== parseInt(action.payload, 10))
        ]
      };
    default:
      return state;
  }
};
export default reducer;
