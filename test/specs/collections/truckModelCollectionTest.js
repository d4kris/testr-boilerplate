require(['collections/truckModelCollection'], function(TruckModelCollection) {
describe('TruckModelCollection', function () {
  var TruckModelCollection, TruckModelModel;
  
  console.log('running TruckModelCollectionTest');

  TruckModelCollection = testr('collections/truckModelCollection');
  TruckModelModel = testr('models/truckModelModel');
            
  it('should be a list of TruckModelModels', function () {
    var model, collection = new TruckModelCollection();
    console.log('running TruckModelCollectionTest.1');
    // add raw object to check what type it will be converted to
    collection.add({
      id : 2
    });
    model = collection.get(2);
    expect(model instanceof TruckModelModel).toBeTruthy();
  });

  it('should have a url of: services/user.json/models', function () {
    var model, collection = new TruckModelCollection();
    expect(collection.url).toContain('services/user.json/models');
    model = new TruckModelModel({
      id : 1
    });
    collection.add(model);
    expect(model.url()).toContain('services/user.json/models/1');
  });

  it('should parse model from response', function () {
    var resp, parsedAttributes, model = new TruckModelCollection();
    // create response
    resp = {
      model : 'Volvo',
      modelId : '123'
    };
    parsedAttributes = model.parse(resp);
    expect(parsedAttributes).toEqual('Volvo');
  });
});
});