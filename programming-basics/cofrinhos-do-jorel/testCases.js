const testCases = {
    "testOperations": {
        "operations":  [
            {'jorjinho': 30},
            {'marquinhos': -50},
            {'bruninho': 25},
            {'bruninho': -20},
            {'benedito': 15},
            {'benedito': -15},
            {'bruninho': -3},
        ],
        "resultLogs": [
            ["Novo cliente criado! Saldo 30"],
            ["Conta nao existente"],
            ["Novo cliente criado! Saldo 25"],
            ["Saque realizado com sucesso"],
            ["Novo cliente criado! Saldo 15"],
            ["Saldo insuficiente"],
            ["Saldo insuficiente"],
        ],
        "resultBank": {
            "jorjinho":30,
            "bruninho":5,
            "benedito":15,
        },
    },
    "testParsing": {
        "operations":  [
            {'mari': 30},
            {'marqUInhos': 50},
            {'brunInho': -5},
            {'Bruninho': 20},
            {'Mari': -15},
            {'maRi': -10},
            {'mari': -3},
            {'Mari': 10},
            {'mari': -3},
            
        ],
        "resultLogs": [
            ["Novo cliente criado! Saldo 30"],
            ["Novo cliente criado! Saldo 50"],
            ["Conta nao existente"],
            ["Novo cliente criado! Saldo 20"],
            ["Saque realizado com sucesso"],
            ["Saque realizado com sucesso"],
            ["Saldo insuficiente"],
            ["Depositado"],
            ["Saque realizado com sucesso"],
        ],
        "resultBank": {
            "marquinhos": 50,
            "bruninho": 20,
            "mari": 12,
        },
    },
}

const persistenceTestCases = {
    "testPersistence": {
        firstDayOperations: [
            {'jorjinho': 30},
            {'marquinhos': -50},
            {'bruninho': 25},
            {'marquinhos': 50},
        ],
        secondDayOperations: [
            {'jorjinho': -10},
            {'marquinhos': 50},
            {'bruninho': -25},
            {'marquinhos': -50},
        ],
        resultLogs: [
            ["Novo cliente criado! Saldo 30"],
            ["Conta nao existente"],
            ["Novo cliente criado! Saldo 25"],
            ["Novo cliente criado! Saldo 50"],
            ["Saque realizado com sucesso"],
            ["Depositado"],
            ["Saldo insuficiente"],
            ["Saque realizado com sucesso"],
        ],
        resultBank: {
            'jorjinho': 20,
            'marquinhos': 50,
            'bruninho': 25,
        },
    }
}
export {testCases, persistenceTestCases};