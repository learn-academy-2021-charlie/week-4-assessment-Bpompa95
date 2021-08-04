# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What is an instance variable in Ruby? How is it different from other variables?

  Your answer: I'm not going to lie i had to look this up to learn more about and from what i learn in class that their is always an @symbole in an name and from what i learn online even though it still repeats the @symbole and name for example  
                                           class FoodOrder
                                   attr_accessor :item1, :item2, :item3

                                   def initialize(item1, item2, item3)
                                  @item1 = item1
                                   @item2 = item2
                                   @item3 = item3
                                       end
                                    end

                      lunch = FoodOrder.new("Sandwich", "Fruit", "La Croix")
                             p lunch.item3


                        lunch.item3 = "Coke"
                        p lunch.item3
    you can make a new set variable and it connects @item and lunch order that is on the bottom. and it's different from the rest because it's not using the @symbole

  Researched answer:An instance variable in ruby has a name starting with @ symbol, and its content is restricted to whatever the object itself refers to. Two separate objects, even though they belong to the same class, are allowed to have different values for their instance variables.



2. What is a block in Ruby?

  Your answer: From what i learn from class blocks uses keywords that are do/end or with {} and the codes for blockes passes through a method. I also learn online that blocks  accecpts an argument and returns to it's value.

  Researched answer: A block is the same thing as a method, but it does not belong to an object. Blocks are called closures in other programming languages. There are some important points about Blocks in Ruby: Block can accept arguments and returns a value. To call a block within a method with a value, yield statement is used.



3. Ruby has an implicit return. What does that mean?

  Your answer: i had to look this up online and on my syllabus to get more better understanding in this so far from what i know the function you create returns without using the keyword return which i thought was really intresting 

  Researched answer: What is Implicit Return? A function is returned values without using the return keyword, it's called an implicit return. The Rules of Implicit Return. You must use an implicit return in a concise body.



4. What is object-oriented programming? How is it different than functional programming?

  Your answer: i know object-oreiented programming is short for OOP. And it is a programming style that is associated with class and objects. oh and i also learn online the four principles of OOP and that is Encapsulation, abstraction, inheritance and polymorphism.

  Researched answer: 
Object-oriented programming has four basic concepts: encapsulation, abstraction, inheritance and polymorphism. Even if these concepts seem incredibly complex, understanding the general framework of how they work will help you understand the basics of a computer program.



5. What is the difference between a class and an object?

  Your answer: ok yes i know this one classes are blueprints of the objects and objects Data types can hold collections of things and when i say things i mean value pairs and you have a list.

  Researched answer:
Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.



6. STRETCH: What is `attr_accessor`?

  Your answer: i don't know much of attr_accessor but what i learn from class is a method whose job is to make more methods.

  Researched answer: attr_accessor is a method called on the current class, and :name is a parameter you pass to that method. It's not a special syntax, it's a simple method call



## Looking Ahead: Terms for Next Week

1. PostgreSQL: 
PostgreSQL is used as the primary data store or data warehouse for many web, mobile, geospatial, and analytics applications. PostgreSQL can store structured and unstructured data in a single product.
 
2. Ruby on Rails: 
Ruby on Rails is an open-source software used to build web applications. Rails is a framework used to create websites using the general-purpose programming language Ruby. Ruby ranks amongst the top ten programming languages predominantly because of the voguishness of Rails.

3. CRUD: CRUD mean Create, Retrieve, Update, Delete, is a very important part of computer programming that is a basic function of any computer database or a program with persistent storage

4. ORM: object-relational mapper (ORM) is a code library that automates the transfer of data stored in relational database tables into objects that are more commonly used in application code.

5. Active Record: Active Record is the M in MVC - the model - which is the layer of the system responsible for representing business data and logic. Active Record facilitates the creation and use of business objects whose data requires persistent storage to a database.
