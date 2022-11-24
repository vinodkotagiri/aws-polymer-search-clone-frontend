import React from 'react'
import { useSelector } from 'react-redux'
import NumericalItems from '../NumericalItems'
const Numericals = () => {
	const repoData = useSelector((state) => state.repos.data)
	const numericals = repoData?.map((repo) => ({ _id: repo._id, numericals: repo.numericals }))

	const stars = numericals?.map((item) => ({
		_id: item._id,
		name: 'Stars',
		data: item.numericals.stars.toString(),
	}))
	const forks = numericals?.map((item) => ({
		_id: item._id,
		name: 'Forks',
		data: item.numericals.forks.toString(),
	}))
	const watchers = numericals?.map((item) => ({
		_id: item._id,
		name: 'Watchers',
		data: item.numericals.watchers.toString(),
	}))
	const openIssues = numericals?.map((item) => ({
		_id: item._id,
		name: 'Open Issues',
		data: item.numericals.openIssues.toString(),
	}))
	console.table(openIssues)
	const data = { stars, forks, watchers, openIssues }
	return <NumericalItems data={data} />
}

export default Numericals
