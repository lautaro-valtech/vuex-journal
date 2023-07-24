export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: 'Lorem Ipsum',
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: 'Lorem Ipsum',
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: 'Lorem Ipsum',
      picture: null,
    }
  ]
})