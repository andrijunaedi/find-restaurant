const itActsAsRestaurantModel = (RestaurantIdb) => {
  it('should return the restaurant that has been added', async () => {
    RestaurantIdb.put({ id: 1 });
    RestaurantIdb.put({ id: 2 });

    expect(await RestaurantIdb.get(1)).toEqual({ id: 1 });
    expect(await RestaurantIdb.get(2)).toEqual({ id: 2 });
    expect(await RestaurantIdb.get(3)).toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    RestaurantIdb.put({ aProperty: 'property' });

    expect(await RestaurantIdb.getAll()).toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    RestaurantIdb.put({ id: 1 });
    RestaurantIdb.put({ id: 2 });

    expect(await RestaurantIdb.getAll()).toEqual([
      { id: 1 },
      { id: 2 },
    ]);
  });

  it('should remove favorite restaurant', async () => {
    RestaurantIdb.put({ id: 1 });
    RestaurantIdb.put({ id: 2 });
    RestaurantIdb.put({ id: 3 });

    await RestaurantIdb.delete(1);

    expect(await RestaurantIdb.getAll()).toEqual([
      { id: 2 },
      { id: 3 },
    ]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    RestaurantIdb.put({ id: 1 });
    RestaurantIdb.put({ id: 2 });
    RestaurantIdb.put({ id: 3 });

    await RestaurantIdb.delete(4);

    expect(await RestaurantIdb.getAll()).toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ]);
  });
};

export default itActsAsRestaurantModel;
