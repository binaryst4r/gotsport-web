import React from "react"
import { Organization } from "../pages/Organization/index"
import { Toggler, TextInput, SelectInput } from "./forms/Elements"
import { fetchCollection } from "../utils/api"
import { useQuery } from "@tanstack/react-query"

export const OrgSearchForm = ({setOrgs}: {setOrgs: React.Dispatch<React.SetStateAction<Array<Organization>>>}) => {
  const [search, setSearch] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const { refetch, isFetching } = useQuery(['orgs'], () => fetchCollection(`/organizations?search[name]=${search}`), {
    enabled: false,
    refetchOnWindowFocus: false
  })
  
  const fetchOrgsReactQuery = () => {
    refetch()
      .then(res => setOrgs(res.data))
      .catch(err => alert(err))
  }
  
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="w-1/3 px-2">
          <TextInput
            type='text'
            name="search[name]"
            label="Search"
            placeholder="Search by org name, slug, ID, or legacy ID"
            onChange={(e) => setSearch(e.target.value)}
          />

          <TextInput
            type='text'
            name="merchant_profile"
            label="Merchant Profile"
            placeholder="Search by Merchant Gateway ID"
          />

          <TextInput
            type='text'
            name="merchant_profile"
            label="Registrations Submitted Form"
          />

          <SelectInput
            options={[{
              name: 'Larry Gust',
              value: 'Larry Gust',
              display: 'Larry Gust'
            }]}
            label="GotSport Representative"
            onSelect={(e) => console.log(e)}
          />
        </div>

        <div className="w-1/3 px-2">
          <SelectInput
            options={[{
              name: 'Larry Gust',
              value: 'Larry Gust',
              display: 'Larry Gust'
            }]}
            label="Type"
            onSelect={(e) => console.log(e)}
          />

          <TextInput
            type='text'
            name="merchant_profile"
            label="Merchant Profile"
            placeholder="Search by Merchant Gateway ID"
          />

          <TextInput
            type='text'
            name="merchant_profile"
            label="Registrations Submitted Form"
          />

          <SelectInput
            options={[{
              name: 'Larry Gust',
              value: 'Larry Gust',
              display: 'Larry Gust'
            }]}
            label="GotSport Representative"
            onSelect={(e) => console.log(e)}
          />
        </div>

        <div className="w-1/3 px-2">
          <TextInput
            type='text'
            name="search"
            label="Search"
            placeholder="Search by org name, slug, ID, or legacy ID"
          />

          <TextInput
            type='text'
            name="merchant_profile"
            label="Merchant Profile"
            placeholder="Search by Merchant Gateway ID"
          />

          <TextInput
            type='text'
            name="merchant_profile"
            label="Registrations Submitted Form"
          />

          <SelectInput
            options={[{
              name: 'Larry Gust',
              value: 'Larry Gust',
              display: 'Larry Gust'
            }]}
            label="GotSport Representative"
            onSelect={(e) => console.log(e)}
          />
        </div>

      </div>
      <div className="px-2">
        <button
          onClick={fetchOrgsReactQuery}
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Search
        </button>
      </div>
    </>
  )
}