import getMenu from "./getMenu";

export default function getItem(item) {
	const menu = getMenu();
	const menuItems = {
		juices: {
			"Fruit Juices": {
				Apple: {
					name: "Apple Juice",
					id: 0,
					availability: true,
					options: [
						{ value: "340ml", price: 5.99 },
						{ value: "450ml", price: 7.99 },
						{ value: "908ml", price: 9.99 },
					],
					price: 5,
					description: "70% pure apple juice, 30% alkalyzed water.",
					image:
						"https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
				},
				Orange: {
					name: "Orange Juice",
					id: 1,
					availability: true,
					options: [
						{ value: "340ml", price: 5.99 },
						{ value: "450ml", price: 7.99 },
						{ value: "908ml", price: 9.99 },
					],
					price: 5,
					description: "70% pure orange juice, 30% alkalyzed water.",
					image:
						"https://images.unsplash.com/photo-1582979512210-99b6a53386f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
				},
				Watermelon: {
					name: "Watermelon Juice",
					id: 2,
					availability: false,
					options: [
						{ value: "340ml", price: 5.99 },
						{ value: "450ml", price: 7.99 },
						{ value: "908ml", price: 9.99 },
					],
					price: 5,
					description: "70% pure watermelon juice, 30% alkalyzed water.",
					image:
						"https://images.unsplash.com/photo-1581074817932-af423ba4566e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
				},
				Pineapple: {
					name: "Pineapple Juice",
					id: 3,
					availability: true,
					options: [
						{ value: "340ml", price: 5.99 },
						{ value: "450ml", price: 7.99 },
						{ value: "908ml", price: 9.99 },
					],
					price: 5,
					description: "70% pure pineapple juice, 30% alkalyzed water.",
					image:
						"https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
				},
			},
			"Veggie Juices": {
				Celery: {
					name: "Celery Juice",
					id: 4,
					availability: true,
					options: [
						{ value: "340ml", price: 5.99 },
						{ value: "450ml", price: 7.99 },
						{ value: "908ml", price: 9.99 },
					],
					price: 5,
					description: "70% pure celery juice, 30% alkalyzed water.",
					image:
						"https://images.unsplash.com/photo-1601459427108-47e20d579a35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
				},
				Cucumber: {
					name: "Cucumber Juice",
					id: 5,
					availability: true,
					options: [
						{ value: "340ml", price: 5.99 },
						{ value: "450ml", price: 7.99 },
						{ value: "908ml", price: 9.99 },
					],
					price: 5,
					description: "70% pure cucumber juice, 30% alkalyzed water.",
					image:
						"https://images.unsplash.com/photo-1589621316382-008455b857cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
				},
				Carrot: {
					name: "Carrot Juice",
					id: 6,
					availability: true,
					options: [
						{ value: "340ml", price: 5.99 },
						{ value: "450ml", price: 7.99 },
						{ value: "908ml", price: 9.99 },
					],
					price: 5,
					description: "70% pure carrot juice, 30% alkalyzed water.",
					image:
						"https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80",
				},
				Beet: {
					name: "Beet Juice",
					id: 7,
					availability: true,
					options: [
						{ value: "340ml", price: 5.99 },
						{ value: "450ml", price: 7.99 },
						{ value: "908ml", price: 9.99 },
					],
					price: 5,
					description: "70% pure beet juice, 30% alkalyzed water.",
					image:
						"https://images.unsplash.com/photo-1527790806964-dfa3c2c7e032?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=639&q=80",
				},
			},
		},
		smoothies: {
			"Fruit Smoothies": {
				"Mango Monsoon": {
					name: "Mango Monsoon Smoothie",
					id: 8,
					availability: true,
					options: [
						{ value: "340ml", price: 5.99 },
						{ value: "450ml", price: 7.99 },
						{ value: "908ml", price: 9.99 },
					],
					price: 7,
					image:
						"https://images.unsplash.com/photo-1501746877-14782df58970?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
					description:
						"Mango, Strawberry, Raspberry, Banana or Apple, Turmeric Powder, and alkalyzed water.",
				},
			},
		},
		"pet meals": {
			"Coming soon": {},
		},
		desserts: {
			"Coming soon": {},
		},
		sandwiches: {
			"Coming soon": {},
		},
		water: {
			Water: {
				"Alkalyzed Water (4L)": {
					name: "Alkalyzed Water",
					id: 10,
					availability: true,
					price: 1.97,
					stock: 10,
					description:
						"Great for enhancing wellbeing, speeding up hangover recovery time, or bringing out flavours in your favourite recipes.",
					image:
						"https://www.essentialmagazine.com/wp-content/uploads/2020/02/246-kangen-M.jpg",
				},
			},
			Devices: {
				"K8 Water Ionizer": {
					name: "Enagic K8 Water Ionizer",
					id: 9,
					availability: true,
					options: [
						{ value: "Pay Cash", price: 4980 },
						{ value: "Finance for $0 down", price: 4980 },
					],
					price: 4980,
					image:
						"http://cdn.shopify.com/s/files/1/0005/8838/2269/products/IMG_0414_1200x1200.jpg?v=1525205213",
					description:
						"Get the device that enhances our recipes in your own home today.",
				},
			},
		},
		gift: {
			Offerings: {
				"Gift Nutritious Meal": {
					id: 11,
					availability: true,
					name: "Gift Meal",
					options: [
						{ value: "🍽️ 1 meal", price: 10 },
						{ value: "🍽️🍽️ 10 meals", price: 100 },
						{ value: "🍽️🍽️🍽️ 50 meals", price: 500 },
						{ value: "🍽️🍽️🍽️🍽️ 100 meals", price: 1000 },
					],
					image: "",
					price: 10,
					description:
						"Help feed someone in need.  Order this item, and we will prepare a nutritious meal and deliver it locally to anyone in need of a meal.",
				},
				"Gift a Tree": {
					id: 12,
					availability: true,
					name: "Gift a Tree",
					options: [
						{ value: "🌲 1 tree", price: 1 },
						{ value: "🌲🌲 10 trees", price: 10 },
						{ value: "🌲🌲🌲 100 trees", price: 100 },
						{ value: "🌲🌲🌲🌲 1000 trees", price: 1000 },
					],
					image: "",
					price: 1,
					description:
						"Help revitalize forests, jungles, and rivers.  Plant a tree today.",
				},
			},
		},
	};

	// Here we create an empty array for the loop below.
	let items = [];

	for (let i = 0; i < menu.nav.length; i++) {
		// Here we convert the items to lowercase.
		let navItem = menu.nav[i].toLocaleLowerCase();
		item = item.toLocaleLowerCase();

		// Here we set items to the corresponding object in menuItems, break the loop, then
		//  return the value.
		if (navItem === item) {
			items = menuItems[navItem];
			break;
		}
	}
	return items;
}
