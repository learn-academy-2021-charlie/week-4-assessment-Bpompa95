# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

 beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# # Expected output: ['coffee', 'soda water']
letter_t = 't'
# # Expected output: ['tea', 'water', 'soda water']


#     def initialized (beverages)
#         @beverages = beverages
        
#     end
# end
# dinks = drinksAndbeverages.new('coffe', 'soda water')
# p drinks.beverages

# drinks = beverages.new()

# method needs two thing an array and a letter 
# the method will give us back words that contain that particular letters
# did some research and looked up more about select on ruby 
# practicing include on my practice file for ruby 
# i am not going to lie i was having a hard time for this but when i kept practicing on my practice file i start to learn more about include?
# lines 14 - 22 did not work at all hahaha i notice that BUT i know it will work for question 3


def shuffle (array_of_words, letter) 
    # i use my array and select and inside my pipes i use word because i am trying to find or define the letter i am looking in the words on the placeholder beverages_array
   array_of_words.select { | word |
    # i use word and i am basically using a true/false method to if the letter i am looking for is true 
   word.include? letter

    }

   end
 p shuffle(beverages_array, 'o')

 p shuffle(beverages_array, 't')





# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# the method needs two things which is string and vowels
# what we want back is to remove all the vowels from the string
# so for sure we will be using the delete () 


album1 = 'Rubber Soul'                 
# Expected output: 'Rbbr Sl'        
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'




    










# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.
# i created a class that says bike
# for the initialized i used model, wheels, and current_speed
# then for each of those i used the @symbole
# then i created my info with a sentence 
# it did not work but not giving up 
class bike
    def initialized(model, wheels, current_speed)
        @model = Trekbike
        @wheels = 2
        @current_speed = 0 mph
    end
    def get_info
        "The #{@model} has #{@wheels} and is going #{@current_speed}"
    end
end

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
