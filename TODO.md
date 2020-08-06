
users profile page
	- teams
	- projects
	- tasks

users profile data
	- name
	- email
	- bio
	- avatar
	- location/idk

users settings page instead of an edit-profile view
	- profile info
	- password
	- email notifications
	- billing details
	- integrations


start job app idea (pretty similar, will use boards as well)


example board json

const board = {
  columns: [
    {
      id: 1,
      title: 'Backlog',
      cards: [
        {
          id: 1,
          title: 'Add card',
          description: 'Add capability to add a card in a column'
        },
      ]
    },
    {
      id: 2,
      title: 'Doing',
      cards: [
        {
          id: 2,
          title: 'Drag-n-drop support',
          description: 'Move a card between the columns'
        },
      ]
    }
  ]
}