import pandas as pd

filepath_dict = {'yelp':   'sentiment_labelled_sentences/yelp_labelled.txt',
                 'amazon': 'sentiment_labelled_sentences/amazon_cells_labelled.txt',
                 'imdb':   'sentiment_labelled_sentences/imdb_labelled.txt'}

df_list = []

for source, filepath in filepath_dict.items():
    df = pd.read_csv(filepath, names=['sentence', 'label'], sep='\t')
    df['source'] = source
    df_list.append(df)

df = pd.concat(df_list)
print(df.iloc[0])