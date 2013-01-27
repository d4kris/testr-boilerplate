require(
    [ 'models/truckModelModel' ], function ( TruckModel ) {

  console.log('running TruckModelModelTest...');
  
  describe('TruckModelModel', function () {
  
    it('should have defaults set', function () {
      var model = new TruckModel();
      console.log('running TruckModelModelTest.1');
      expect(model.get('id')).toEqual('');
      expect(model.get('brand')).toEqual('');
      expect(model.get('modelId')).toEqual('');
    });

    it('should parse modelId to id', function () {
      var resp, parsedAttributes, model = new TruckModel();
      // create response
      resp = {
        brand : 'Volvo',
        modelId : '123'
      };
      parsedAttributes = model.parse(resp);
      expect(parsedAttributes.id).toEqual('123');
      expect(parsedAttributes.brand).toEqual('Volvo');
      expect(parsedAttributes.modelId).toEqual('123');
    });
  });

});
