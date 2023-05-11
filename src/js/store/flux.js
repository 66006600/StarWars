const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			favorites: [],
			peopleList: [],


			// 	demo: [
			// 		{
			// 			title: "FIRST",
			// 			background: "white",
			// 			initial: "white"
			// 		},
			// 		{
			// 			title: "SECOND",
			// 			background: "white",
			// 			initial: "white"
			// 		}
			// 	]
			// },
			actions: {
				// Use getActions to call a function within a fuction
				fetchpeople: async () => {

					const URL = "https://www.swapi.tech/api/people/";
					const CONFIG = {
						method: "GET",
						headers: {
							"Content-type": "application/json",
						}
					};
					const response = await fetch(URL, CONFIG);
					const json = await response.json()

				};


				exampleFunction: () => {
					getActions().changeColor(0, "green");
				},
				loadSomeData: () => {
					/**
						fetch().then().then(data => setStore({ "foo": data.bar }))
					*/
				},
				changeColor: (index, color) => {
					//get the store
					const store = getStore();

					//we have to loop the entire demo array to look for the respective index
					//and change its color
					const demo = store.demo.map((elm, i) => {
						if (i === index) elm.background = color;
						return elm;
					});

					//reset the global store
					setStore({ demo: demo });
				}
			}
		};
	};

	export default getState;
