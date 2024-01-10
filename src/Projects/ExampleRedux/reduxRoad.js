const initialWagonState = {
	supplies: 100,
	distance: 0,
	days: 0,
}

const gatherSupplies = {
	type: 'gather',
}

const travel = {
	type: 'travel',
	payload: 3,
}

const tippedWagon = {
	type: 'tippedWagon',
}

const wagonReducer = (state = initialWagonState, action) => {
	switch (action.type) {
		case 'gather': {
			return {
				...state,
				supplies: state.supplies + 15,
				days: state.days + 1,
			}
		}
		case 'travel': {
			if (state.supplies >= 20 * action.payload) {
				return {
					...state,
					supplies: state.supplies - 20 * action.payload,
					distance: state.distance + 10 * action.payload,
					days: state.days + action.payload,
				}
			} else {
				return state
			}
		}
		case 'tippedWagon': {
			return {
				...state,
				supplies: state.supplies - 30,
				days: state.days + 1,
			}
		}
		default: {
			return state
		}
	}
}

let wagon = wagonReducer(undefined, {})
console.log(wagon)

wagon = wagonReducer(wagon, travel)
console.log(wagon)

wagon = wagonReducer(wagon, gatherSupplies)
console.log(wagon)

wagon = wagonReducer(wagon, tippedWagon)
console.log(wagon)

wagon = wagonReducer(wagon, travel)
console.log(wagon)
