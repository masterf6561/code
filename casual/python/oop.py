import csv

class storeItem():
    payRate = 0.75
    all = []
    
    def __init__(self, name: str, price: float, quantity: int = 0):
        assert price >= 0, f"price is to low"
        assert quantity >= 0, f"quantity to low"
        
        self.name = name
        self.price = price
        self.quantity = quantity
        
        storeItem.all.append(self)
    
    def getTotalPrice(self) -> int:
        return self.price * self.quantity
        
    def applyDiscount(self):
        self.price = self.price * self.payRate
    
    def __repr__(self) -> str:
        return f"{self.__class__.__name__}('{self.name}', {self.price}, {self.quantity})"
    
    @classmethod  #decorator to change function from instance function to classfunction/method
    def instantiate_from_csv(cls):
        with open("./resources/storeItems.csv", "r") as file:
            reader = csv.DictReader(file)
            items = list(reader)
        for item in items:
            storeItem(
                name=item.get("name"),
                price=float(item.get("price")),
                quantity=int(item.get("quantity"))
            )
    @staticmethod        
    def is_int(num) -> bool:
        if isinstance(num, float):
            return num.is_integer()
        elif isinstance(num, int):
            return True
        else:
            return False
    
class Phone(storeItem):
    def __init__(self, name: str, price: float, quantity: int = 0, broken_phones = 0):
        
        # call super function to have access to all attributes and methods, refers to parent class 
        super().__init__(
            name, price, quantity
        )
        assert broken_phones >= 0, f"broken_phones {broken_phones} ist to low"
        
        self.broken_phones = broken_phones
        
    
if __name__ == "__main__":
    
    phone1 = Phone("jscPhone10", 500, 5, 1)
    phone2 = Phone("jscPhone20", 700, 5, 3)
        
    #storeItem.instantiate_from_csv()
    print(storeItem.all) #calls the __repr__ function
    print(Phone.all)
    print(phone1.getTotalPrice())