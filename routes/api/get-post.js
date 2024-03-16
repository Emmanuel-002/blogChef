export default (req, res) => {
  res.json({
    post: {
      user: {
        name: "Joe Mockery",
        id: 1,
      },
      title: "Thoughts on JavaScript",
      content:
        "I love a hot cuppa Java with my donuts. Particularly when I'm reading the script for my new movie. Java and Script, mmmm, delicious!",
      createdAt: "2019-11-28T11:01:45.948Z",
      id: 1,
    },
  });
};
