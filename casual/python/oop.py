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
        return f"Item('{self.name}', {self.price}, {self.quantity})"
    
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
    
if __name__ == "__main__":
    #print(Desk.getTotalPrice())
    #print(storeItem.payRate) #storeItem.__dict__ to show all attributes
    
    #print(Monitor.price)  
    
    """ for instance in storeItem.all:
        print(instance.name) """
    storeItem.instantiate_from_csv()
    print(storeItem.all) #calls the __repr__ function