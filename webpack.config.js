module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve :{
    root: __dirname,
    alias: {
      Note: 'app/components/Note.js',
      NoteForm: 'app/components/NoteForm.js',
      List: 'app/components/List.js',
      reducer: 'app/reducers/reducer.js',
      store: 'app/storeConf.js',
      action: 'app/action.js'
    }
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  }
};
