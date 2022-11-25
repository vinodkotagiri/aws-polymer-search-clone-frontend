import React from 'react'
import { useSelector } from 'react-redux'
import BooleanItems from '../BooleanItems'
const Booleans = () => {
	const repoData = useSelector((state) => state.repos.data)
	const booleans = repoData?.map((repo) => ({ _id: repo._id, booleans: repo.booleans }))
	const has_issues = booleans?.map((item) => ({
		_id: item._id,
		name: 'Has Issues',
		data: item.booleans.has_issues.toString(),
	}))
	const has_projects = booleans?.map((item) => ({
		_id: item._id,
		name: 'Has Projects',
		data: item.booleans.has_projects.toString(),
	}))
	const has_downloads = booleans?.map((item) => ({
		_id: item._id,
		name: 'Has Downloads',
		data: item.booleans.has_downloads.toString(),
	}))
	const has_wiki = booleans?.map((item) => ({
		_id: item._id,
		name: 'Has Wiki',
		data: item.booleans.has_wiki.toString(),
	}))
	const has_pages = booleans?.map((item) => ({
		_id: item._id,
		name: 'Has Pages',
		data: item.booleans.has_pages.toString(),
	}))
	const has_discussions = booleans?.map((item) => ({
		_id: item._id,
		name: 'Has Discussions',
		data: item.booleans.has_discussions.toString(),
	}))
	const archived = booleans?.map((item) => ({
		_id: item._id,
		name: 'Archived',
		data: item.booleans.archived.toString(),
	}))
	const disabled = booleans?.map((item) => ({
		_id: item._id,
		name: 'Disabled',
		data: item.booleans.disabled.toString(),
	}))

	const allow_forking = booleans?.map((item) => ({
		_id: item._id,
		name: 'Allow Forking',
		data: item.booleans.allow_forking.toString(),
	}))
	const is_template = booleans?.map((item) => ({
		_id: item._id,
		name: 'Is Template',
		data: item.booleans.is_template.toString(),
	}))
	const signoff_required = booleans?.map((item) => ({
		_id: item._id,
		name: 'Signoff Required',
		data: item.booleans.web_commit_signoff_required.toString(),
	}))
	const data = {
		has_issues,
		has_downloads,
		has_wiki,
		has_pages,
		has_discussions,
		archived,
		disabled,
		allow_forking,
		is_template,
		signoff_required,
		has_projects,
	}
	return <BooleanItems data={data} />
}

export default Booleans
