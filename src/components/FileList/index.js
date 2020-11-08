import React, { useContext } from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';

import { Container, FileInfo, Preview } from './styles';

import { ThemeContext } from 'styled-components';

function FileList(props) {
  const themeContext = useContext(ThemeContext);

  return (
    <Container>
      <h4>Imagens carregadas</h4>
      <ul>
        <li>
          <FileInfo>
            <Preview
              src="https://scontent.fgru10-1.fna.fbcdn.net/v/t1.0-9/76661762_1398068277035261_2106777747559809024_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEQ-IE8dCMWv_p0qobPaqG-XchR-_7t3_BdyFH7_u3f8LjMzrAg9AcBWgKqdg-65lGUXrAsT0EWQ_AoY9Ua0K46&_nc_ohc=1vKljZXYpOkAX-FBvM-&_nc_ht=scontent.fgru10-1.fna&oh=aad8029a2e1c279376b6b368974f11c2&oe=5FCBA996"
              alt="preview"
            />

            <div>
              <strong>profile.png</strong>
              <span>2.4 mb</span>
            </div>
          </FileInfo>
          <div>
            <CircularProgressbar
              styles={{
                root: { width: 35 },
                path: {
                  stroke: themeContext.colors.primary,
                  strokeLinecap: 'round',
                },
                trail: {
                  stroke: themeContext.colors.subtext,
                },
              }}
              strokeWidth={10}
              value={50}
            />
          </div>
        </li>
      </ul>
    </Container>
  );
}

export default FileList;
