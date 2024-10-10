// tests/todoTest.spec.js
const { test, expect } = require('@playwright/test');
const { getUsers, getTodos } = require('../helpers/apiHelper');

test('Validate that users from FanCode city have completed more than 50% of their tasks', async () => {
    const users = await getUsers();
    const todos = await getTodos();

    // Filter users based on FanCode city lat/lng coordinates
    const fanCodeUsers = users.filter(user => {
        const lat = parseFloat(user.address.geo.lat);
        const lng = parseFloat(user.address.geo.lng);
        return lat >= -40 && lat <= 5 && lng >= 5 && lng <= 100;
    });

    // List of users who have completed more than 50% of their tasks
    let usersOver50Percent = [];

    fanCodeUsers.forEach(user => {
        const userTodos = todos.filter(todo => todo.userId === user.id);
        const completedTasks = userTodos.filter(todo => todo.completed).length;
        const totalTasks = userTodos.length;
        const completionPercentage = (completedTasks / totalTasks) * 100;

        if (completionPercentage > 50) {
            usersOver50Percent.push({
                userId: user.id,
                name: user.name,
                completedTasks,
                totalTasks,
                completionPercentage: completionPercentage.toFixed(2)
            });
        }
    });

    // Print list of users who completed more than 50% of their tasks
    console.log('Users who completed more than 50% of their tasks:', usersOver50Percent);

    // Ensure that there are users who completed more than 50% of their tasks
    expect(usersOver50Percent.length).toBeGreaterThan(0);
});
