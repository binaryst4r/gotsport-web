import React from "react"
import { Organization } from "../App"
import { Toggler, TextInput, SelectInput } from "./forms/Elements"

export const OrgSearchForm = ({setOrgs}: {setOrgs: React.Dispatch<React.SetStateAction<Array<Organization>>>}) => {
  const [search, setSearch] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const fetchOrgs = async () => {
    setLoading(true)
    console.log('fetching')
    const response = await fetch(`http://localhost:3000/api/v1/organizations?search[name]=${search}`, {
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Accept':'*/*'
      }
    })
    const data = await response.json()
    if (data) {
      setOrgs(data)
    }
    setLoading(false)
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
          onClick={fetchOrgs}
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Search
        </button>
      </div>
    </>
  )
}