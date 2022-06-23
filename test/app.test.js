const searchInDBByNameOrDiscription = require("../app");

it("Проверка на запрос с пустым результатом", async function () {
    var searchString = "non-existent entry";
    var tableName = "table_test";
    var expectedCount = 0;
    var expectedCountAll = 0;
    var result = await searchInDBByNameOrDiscription(tableName, searchString);
    if (result.count != expectedCount || Object.keys(result.data).length != expectedCountAll) {
        throw new Error(`\nПолученный результат не совпал c ожидаемым (возвращенных записей / найденных записей)\n` +
                        `Ожидание: ${expectedCount} / ${expectedCountAll}\n` +
                        `Получено: ${Object.keys(result.data).length} / ${result.count}`);
    }
})

it("Проверка на тестовой базе на запрос с возвратом 5 записей", async function () {
    var searchString = "return 5 database entry";
    var tableName = "table_test";
    var expectedCount = 5;
    var expectedCountAll = 5;
    var result = await searchInDBByNameOrDiscription(tableName, searchString);
    if (result.count != expectedCount || Object.keys(result.data).length != expectedCountAll) {
        throw new Error(`\nПолученный результат не совпал c ожидаемым (возвращенных записей / найденных записей)\n` +
                        `Ожидание: ${expectedCount} / ${expectedCountAll}\n` +
                        `Получено: ${Object.keys(result.data).length} / ${result.count}`);
    }
})

it("Проверка на тестовой базе на запрос с возвратом 20 записей из 25 найденных", async function () {
    var searchString = "return 20 database entry of 25";
    var tableName = "table_test";
    var expectedCount = 20;
    var expectedCountAll = 25;
    var result = await searchInDBByNameOrDiscription(tableName, searchString);
    if (result.count != expectedCount || Object.keys(result.data).length != expectedCountAll) {
        throw new Error(`\nПолученный результат не совпал c ожидаемым (возвращенных записей / найденных записей)\n` +
                        `Ожидание: ${expectedCount} / ${expectedCountAll}\n` +
                        `Получено: ${Object.keys(result.data).length} / ${result.count}`);
    }
})
