class Pagination():
    def __init__(self, items = None, pageSize = 10):
        if items is None:
            items = []
        self.items = items
        self.pageSize = pageSize
        self.currentPage = 2

    def getVisibleItems(self):
        end = self.pageSize*self.currentPage
        start = self.pageSize*self.currentPage - self.pageSize
        print(self.items[start : end])

    def prevPage(self):
        if self.currentPage > 1:
            self.currentPage -= 1
        self.getVisibleItems()

    def nextPage(self):
        # if self.currentPage * self.pageSize  > :
        if self.currentPage + 1 * self.pageSize < len(self.items):
            self.currentPage += 1 

        self.getVisibleItems()

    def firstPage(self):
        self.currentPage = 1
        self.getVisibleItems()

    def lastPage(self):
        if len(self.items) % self.pageSize != 0: 
            self.currentPage = len(self.items) // self.pageSize + 1
        else:
            self.currentPage = len(self.items) // self.pageSize
        self.getVisibleItems()
    

    def goToPage(self, pageNum):
        if len(self.items) % self.pageSize != 0: 
            last_p = len(self.items) // self.pageSize + 1
        else:
            last_p = len(self.items) // self.pageSize
        
        if pageNum > last_p:
            self.currentPage = last_p
        else:
            self.currentPage = pageNum
        self.getVisibleItems()
        



alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)

# p.getVisibleItems()
# p.prevPage()

# p.nextPage()

# p.firstPage()

# p.lastPage()

p.goToPage(100)