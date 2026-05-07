// ConsoleApplication1.cpp : Этот файл содержит функцию "main". Здесь начинается и заканчивается выполнение программы.
//

#include <iostream>
using namespace std;
class Animal {
protected:
    string name;
    int weight;
public:
    Animal(string x,int y):name(x),weight(y){}
    virtual void makeSound()=0;
    void print() { cout << "name= " << name << " weight= " << weight << endl; }
};
class Cat : public Animal {
public:
    Cat(string x, int y) :Animal(x, y) {};
    void makeSound() {
        cout << name << " говорит мяу"<<endl;
    }
};
class Dog : public Animal {
public:
    Dog(string x, int y) :Animal(x, y) {};
    void makeSound() {
        cout << name << " говорит гав" << endl;
    }
};
int main()
{
    setlocale(LC_ALL, "RU");
    Cat mycat("ghh", 10);
    Dog mydog("sfs", 52);

    mycat.print();
    mycat.makeSound();

    mydog.print();
    mydog.makeSound();
}

// Запуск программы: CTRL+F5 или меню "Отладка" > "Запуск без отладки"
// Отладка программы: F5 или меню "Отладка" > "Запустить отладку"

// Советы по началу работы 
//   1. В окне обозревателя решений можно добавлять файлы и управлять ими.
//   2. В окне Team Explorer можно подключиться к системе управления версиями.
//   3. В окне "Выходные данные" можно просматривать выходные данные сборки и другие сообщения.
//   4. В окне "Список ошибок" можно просматривать ошибки.
//   5. Последовательно выберите пункты меню "Проект" > "Добавить новый элемент", чтобы создать файлы кода, или "Проект" > "Добавить существующий элемент", чтобы добавить в проект существующие файлы кода.
//   6. Чтобы снова открыть этот проект позже, выберите пункты меню "Файл" > "Открыть" > "Проект" и выберите SLN-файл.
