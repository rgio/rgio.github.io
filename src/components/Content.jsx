import { useState } from 'react';

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const conversations = [
  {
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl: 'https://i.ytimg.com/vi/oi-wHz5bpps/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIF4oVTAP&rs=AOn4CLDjTnlUoIYWXqlje4uXyHJqEdTphw',
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    description: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    description:
      'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
  },
  {
    title: 'Writing effective landing page copy',
    href: '#',
    description:
      'Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.',
    date: 'Jan 29, 2020',
    datetime: '2020-01-29',
  },
]

const projects = [
  {
    title: 'Test Project',
    href: '#',
    description:
      'Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.',
    date: 'Jan 29, 2020',
    datetime: '2020-01-29',
  },
]

const tabs = [
  { name: 'Conversations', href: '#', current: true },
  { name: 'Projects', href: '#', current: false },
]

// function setCurrentTab(tabName) {
//   alert(tabName)
//   for (let i = 0; i < tabs.length; i++) {
//     if(tabs[i].name == tabName) tabs[i].current = true;
//     else {
//       tabs[i].current = false;
//     }
//   }
// }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Tabs({setPosts, currentTab, setCurrentTab}) {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={currentTab}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() =>{
                  setCurrentTab(tab.name)
                  switch (tab.name) {
                    case "Conversations":
                      setPosts(conversations);
                      break;
                    case "Projects":
                      setPosts(projects);
                      break;
                    default:
                      break;
                  }
                }}
                className={classNames(
                  tab.name == currentTab
                    ? 'border-indigo-500 text-white'
                    : 'border-transparent text-white',
                  'w-1/4 py-4 px-1 text-center border-b-2 font-bold text-3xl'
                )}
                aria-current={tab.name == currentTab ? 'page' : undefined}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default function Content() {
  const [currentTab, setCurrentTab] = useState('Conversations');
  const [posts, setPosts] = useState(conversations);

  return (
    <div className="bg-white px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <div className="relative mx-auto max-w-7xl lg:max-w-7xl">
        {/* <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Conversations</h2>
        </div> */}
        <Tabs
          setPosts={setPosts}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        <div className="mt-6 gap-16 flex flex-col pt-10">
          {posts.map((post) => (
            <div className="flex flex-row content-row" key={post.title}>
              <div className="flex flex-row content-row__container">
                {/* <p className="text-sm text-gray-500">
                  <time dateTime={post.datetime}>{post.date}</time>
                </p> */}
                <a href={post.href} target="_blank" className="mt-2 flex flex-row content-row__image">
                  <img className="content-img" src={post.imageUrl} alt="" />
                  <div className="flex flex-col ml-6">
                    <p className="text-xl font-semibold text-white">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}