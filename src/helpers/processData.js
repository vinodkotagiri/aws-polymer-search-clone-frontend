export function processData(data) {
	const dataMap = {}
	data.data.forEach((item) => {
		if (dataMap[item.values]) dataMap[item.values] += 1
		else dataMap[item.values] = 1
	})
	let items = []
	for (let key of Object.keys(dataMap)) {
		items.push({ item: key, count: dataMap[key] })
	}
	return { name: data.name, items: items }
}
