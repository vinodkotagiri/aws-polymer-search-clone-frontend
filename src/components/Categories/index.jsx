import React from 'react'
import { useSelector } from 'react-redux'
import CategoriesItem from '../CategoriesItem'
const Categories = () => {
	const repoData = useSelector((state) => state.repos.data)
	const categories = repoData?.map((repo) => ({ _id: repo._id, categories: repo.categories }))
	const serviceNames = categories?.map((item) => ({
		_id: item._id,
		name: 'Service Name',
		data: item.categories.name,
	}))
	const language = categories?.map((item) => ({
		_id: item._id,
		name: 'Language',
		data: item.categories.language,
	}))
	const license = categories?.map((item) => ({
		_id: item._id,
		name: 'License',
		data: item.categories.license,
	}))
	const owner = categories?.map((item) => ({
		_id: item._id,
		name: 'Owner',
		data: item.categories.owner,
	}))
	const searchKeywords = categories?.map((item) => ({
		_id: item._id,
		name: 'Search Keywords',
		data: [...item.categories.searchKeyWords],
	}))
	const topics = categories?.map((item) => ({
		_id: item._id,
		name: 'Topics',
		data: [...item.categories.topics],
	}))
	const data = { serviceNames, language, license, owner, searchKeywords, topics }
	return <CategoriesItem data={data} />
}

export default Categories
